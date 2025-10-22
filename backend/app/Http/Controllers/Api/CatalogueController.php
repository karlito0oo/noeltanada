<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Catalogue;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Validator;

class CatalogueController extends Controller
{
    /**
     * Get all catalogues
     */
    public function index(): JsonResponse
    {
        try {
            $catalogues = Catalogue::active()
                ->ordered()
                ->get();

            // Add base URL to image and PDF paths
            $baseUrl = rtrim(config('app.url') ?? url('/'), '/');
            $catalogues->transform(function ($item) use ($baseUrl) {
                if ($item->image_url && !preg_match('/^https?:\/\//', $item->image_url)) {
                    $item->image_url = $baseUrl . $item->image_url;
                }
                if ($item->pdf_url && !preg_match('/^https?:\/\//', $item->pdf_url)) {
                    $item->pdf_url = $baseUrl . $item->pdf_url;
                }
                return $item;
            });

            return response()->json([
                'success' => true,
                'data' => $catalogues
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch catalogues',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Get single catalogue
     */
    public function show($id): JsonResponse
    {
        try {
            $catalogue = Catalogue::findOrFail($id);

            // Add base URL to image and PDF paths
            $baseUrl = rtrim(config('app.url') ?? url('/'), '/');
            if ($catalogue->image_url && !preg_match('/^https?:\/\//', $catalogue->image_url)) {
                $catalogue->image_url = $baseUrl . $catalogue->image_url;
            }
            if ($catalogue->pdf_url && !preg_match('/^https?:\/\//', $catalogue->pdf_url)) {
                $catalogue->pdf_url = $baseUrl . $catalogue->pdf_url;
            }

            return response()->json([
                'success' => true,
                'data' => $catalogue
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Catalogue not found',
                'error' => $e->getMessage()
            ], 404);
        }
    }

    /**
     * Create new catalogue
     */
    public function store(Request $request): JsonResponse
    {
        try {
            $validator = Validator::make($request->all(), [
                'title' => 'required|string|max:255',
                'description' => 'nullable|string',
                'image_url' => 'required|string',
                'pdf_url' => 'nullable|string',
                'order' => 'nullable|integer',
                'is_active' => 'nullable|boolean',
            ]);

            if ($validator->fails()) {
                return response()->json([
                    'success' => false,
                    'message' => 'Validation failed',
                    'errors' => $validator->errors()
                ], 422);
            }

            $catalogue = Catalogue::create($request->all());

            return response()->json([
                'success' => true,
                'message' => 'Catalogue created successfully',
                'data' => $catalogue
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to create catalogue',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Update catalogue
     */
    public function update(Request $request, $id): JsonResponse
    {
        try {
            $catalogue = Catalogue::findOrFail($id);

            $validator = Validator::make($request->all(), [
                'title' => 'sometimes|required|string|max:255',
                'description' => 'nullable|string',
                'image_url' => 'sometimes|required|string',
                'pdf_url' => 'nullable|string',
                'order' => 'nullable|integer',
                'is_active' => 'nullable|boolean',
            ]);

            if ($validator->fails()) {
                return response()->json([
                    'success' => false,
                    'message' => 'Validation failed',
                    'errors' => $validator->errors()
                ], 422);
            }

            $catalogue->update($request->all());

            return response()->json([
                'success' => true,
                'message' => 'Catalogue updated successfully',
                'data' => $catalogue
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to update catalogue',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Delete catalogue
     */
    public function destroy($id): JsonResponse
    {
        try {
            $catalogue = Catalogue::findOrFail($id);
            $catalogue->delete();

            return response()->json([
                'success' => true,
                'message' => 'Catalogue deleted successfully'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to delete catalogue',
                'error' => $e->getMessage()
            ], 404);
        }
    }
}

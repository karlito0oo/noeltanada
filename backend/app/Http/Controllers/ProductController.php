<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Validation\Rule;

class ProductController extends Controller
{
    /**
     * Display a listing of the products.
     */
    public function index(Request $request): JsonResponse
    {
        $query = Product::query();

        // Filter by type
        if ($request->has('type')) {
            $query->where('type', $request->type);
        }

        // Filter by availability
        if ($request->has('availability')) {
            $query->where('availability', $request->availability);
        }

        // Filter by featured
        if ($request->has('featured')) {
            $query->where('is_featured', $request->boolean('featured'));
        }

        // Search by name or description
        if ($request->has('search')) {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                  ->orWhere('description', 'like', "%{$search}%");
            });
        }

        // Sort
        $sortBy = $request->get('sort_by', 'created_at');
        $sortOrder = $request->get('sort_order', 'desc');
        $query->orderBy($sortBy, $sortOrder);

        // Paginate
        $perPage = $request->get('per_page', 15);
        $products = $query->paginate($perPage);

        return response()->json($products);
    }

    /**
     * Store a newly created product.
     */
    public function store(Request $request): JsonResponse
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'category' => 'required|string|max:255',
            'image' => 'required|string|max:500',
            'images' => 'required|array',
            'images.*' => 'string|max:500',
            'type' => 'required|string|max:255',
            'price' => 'required|numeric|min:0',
            'availability' => ['required', Rule::in(['In Stock', 'Out of Stock'])],
            'date_added' => 'required|date',
            'dimensions' => 'required|string|max:255',
            'material' => 'required|string|max:255',
            'description' => 'required|string',
            'material_options' => 'required|array',
            'material_options.*.label' => 'required|string',
            'material_options.*.value' => 'required|string',
            'is_featured' => 'boolean'
        ]);

        $product = Product::create($validatedData);

        return response()->json([
            'message' => 'Product created successfully',
            'product' => $product
        ], 201);
    }

    /**
     * Display the specified product.
     */
    public function show(Product $product): JsonResponse
    {
        return response()->json($product);
    }

    /**
     * Update the specified product.
     */
    public function update(Request $request, Product $product): JsonResponse
    {
        $validatedData = $request->validate([
            'name' => 'sometimes|string|max:255',
            'category' => 'sometimes|string|max:255',
            'image' => 'sometimes|string|max:500',
            'images' => 'sometimes|array',
            'images.*' => 'string|max:500',
            'type' => 'sometimes|string|max:255',
            'price' => 'sometimes|numeric|min:0',
            'availability' => ['sometimes', Rule::in(['In Stock', 'Out of Stock'])],
            'date_added' => 'sometimes|date',
            'dimensions' => 'sometimes|string|max:255',
            'material' => 'sometimes|string|max:255',
            'description' => 'sometimes|string',
            'material_options' => 'sometimes|array',
            'material_options.*.label' => 'required_with:material_options|string',
            'material_options.*.value' => 'required_with:material_options|string',
            'is_featured' => 'boolean'
        ]);

        $product->update($validatedData);

        return response()->json([
            'message' => 'Product updated successfully',
            'product' => $product
        ]);
    }

    /**
     * Remove the specified product.
     */
    public function destroy(Product $product): JsonResponse
    {
        $product->delete();

        return response()->json([
            'message' => 'Product deleted successfully'
        ]);
    }

    /**
     * Get featured products only.
     */
    public function featured(): JsonResponse
    {
        $products = Product::where('is_featured', true)->get();
        
        return response()->json($products);
    }

    /**
     * Toggle featured status of a product.
     */
    public function toggleFeatured(Product $product): JsonResponse
    {
        $product->update(['is_featured' => !$product->is_featured]);

        return response()->json([
            'message' => 'Product featured status updated successfully',
            'product' => $product
        ]);
    }
}

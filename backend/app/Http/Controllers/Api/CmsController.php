<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\CmsSetting;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Validator;

class CmsController extends Controller
{
    /**
     * Get all CMS settings
     */
    public function index(): JsonResponse
    {
        try {
            $settings = CmsSetting::where('is_active', true)
                ->orderBy('group')
                ->orderBy('key')
                ->get();

            // Group settings by their group
            $groupedSettings = $settings->groupBy('group');
            
            // Also provide a flat key-value structure for easy access
            $flatSettings = $settings->pluck('value', 'key');

            return response()->json([
                'success' => true,
                'data' => [
                    'grouped' => $groupedSettings,
                    'flat' => $flatSettings,
                    'all' => $settings
                ]
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch CMS settings',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Get settings by group
     */
    public function getByGroup($group): JsonResponse
    {
        try {
            $settings = CmsSetting::where('group', $group)
                ->where('is_active', true)
                ->get();

            return response()->json([
                'success' => true,
                'data' => $settings
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch settings for group: ' . $group,
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Update CMS setting
     */
    public function update(Request $request, $key): JsonResponse
    {
        try {
            $validator = Validator::make($request->all(), [
                'value' => 'required',
                'type' => 'sometimes|string|in:text,textarea,richtext,email,phone,url,number',
                'group' => 'sometimes|string',
                'label' => 'sometimes|string',
                'description' => 'sometimes|string'
            ]);

            if ($validator->fails()) {
                return response()->json([
                    'success' => false,
                    'message' => 'Validation failed',
                    'errors' => $validator->errors()
                ], 422);
            }

            $setting = CmsSetting::where('key', $key)->first();

            if (!$setting) {
                return response()->json([
                    'success' => false,
                    'message' => 'CMS setting not found'
                ], 404);
            }

            $setting->update($request->only(['value', 'type', 'group', 'label', 'description']));

            return response()->json([
                'success' => true,
                'message' => 'CMS setting updated successfully',
                'data' => $setting
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to update CMS setting',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Update multiple settings at once
     */
    public function updateMultiple(Request $request): JsonResponse
    {
        try {
            $validator = Validator::make($request->all(), [
                'settings' => 'required|array',
                'settings.*.key' => 'required|string',
                'settings.*.value' => 'required',
            ]);

            if ($validator->fails()) {
                return response()->json([
                    'success' => false,
                    'message' => 'Validation failed',
                    'errors' => $validator->errors()
                ], 422);
            }

            $updatedSettings = [];

            foreach ($request->settings as $settingData) {
                $setting = CmsSetting::where('key', $settingData['key'])->first();
                
                if ($setting) {
                    $setting->update(['value' => $settingData['value']]);
                    $updatedSettings[] = $setting;
                }
            }

            return response()->json([
                'success' => true,
                'message' => 'CMS settings updated successfully',
                'data' => $updatedSettings
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to update CMS settings',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Create new CMS setting
     */
    public function store(Request $request): JsonResponse
    {
        try {
            $validator = Validator::make($request->all(), [
                'key' => 'required|string|unique:cms_settings,key',
                'value' => 'required',
                'type' => 'sometimes|string|in:text,textarea,richtext,email,phone,url,number',
                'group' => 'sometimes|string',
                'label' => 'sometimes|string',
                'description' => 'sometimes|string'
            ]);

            if ($validator->fails()) {
                return response()->json([
                    'success' => false,
                    'message' => 'Validation failed',
                    'errors' => $validator->errors()
                ], 422);
            }

            $setting = CmsSetting::create($request->all());

            return response()->json([
                'success' => true,
                'message' => 'CMS setting created successfully',
                'data' => $setting
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to create CMS setting',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}

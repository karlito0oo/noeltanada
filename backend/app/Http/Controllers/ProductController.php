<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Storage;

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
        $perPage = $request->get('per_page', 9999);
        $products = $query->paginate($perPage);

        // Image URLs are automatically transformed by model accessors

        return response()->json($products);
    }

    /**
     * Store a newly created product.
     */
    public function store(Request $request): JsonResponse
    {   
        
        // Get all request data without strict validation
        $validatedData = $request->all();

        // Handle single image upload
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('products', 'public');
            $validatedData['image'] = $imagePath;
        }

        // Handle multiple images upload
        $imagePaths = [];
        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $image) {
                $imagePath = $image->store('products', 'public');
                $imagePaths[] = $imagePath;
            }
        }

        // Set default values for nullable fields
        $validatedData['date_added'] = now()->format('Y-m-d');
        $validatedData['images'] = !empty($imagePaths) ? $imagePaths : [$validatedData['image'] ?? ''];
        $validatedData['material_options'] = $validatedData['material_options'] ?? [];
        $validatedData['dimensions'] = $validatedData['dimensions'] ?? '';
        $validatedData['material'] = $validatedData['material'] ?? '';
        $validatedData['is_featured'] = $validatedData['is_featured'] ?? false;

        // Decode JSON string for material_options if it exists
        if (isset($validatedData['material_options']) && is_string($validatedData['material_options'])) {
            $validatedData['material_options'] = json_decode($validatedData['material_options'], true) ?? [];
        }

        $product = Product::create($validatedData);

        // Image URLs are automatically transformed by model accessors
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
        // Image URLs are automatically transformed by model accessors
        return response()->json($product);
    }

    /**
     * Update the specified product.
     */
    public function update(Request $request, Product $product): JsonResponse
    {
        // Get all request data without strict validation
        $validatedData = $request->all();

        // Handle single image upload
        if ($request->hasFile('image')) {
            // Delete old image if it exists
            if ($product->image && \Storage::disk('public')->exists($product->image)) {
                \Storage::disk('public')->delete($product->image);
            }
            
            $imagePath = $request->file('image')->store('products', 'public');
            $validatedData['image'] = $imagePath;
        }

        // Handle multiple images upload
        if ($request->hasFile('images')) {
            // Delete old images if they exist
            if ($product->images && is_array($product->images)) {
                foreach ($product->images as $oldImage) {
                    if ($oldImage && \Storage::disk('public')->exists($oldImage)) {
                        \Storage::disk('public')->delete($oldImage);
                    }
                }
            }

            $imagePaths = [];
            foreach ($request->file('images') as $image) {
                $imagePath = $image->store('products', 'public');
                $imagePaths[] = $imagePath;
            }
            $validatedData['images'] = $imagePaths;
        } elseif (isset($validatedData['image']) && !$request->hasFile('images')) {
            // If only single image is updated, update the images array too
            $validatedData['images'] = [$validatedData['image']];
        }

        // Decode JSON string for material_options if it exists
        if (isset($validatedData['material_options']) && is_string($validatedData['material_options'])) {
            $validatedData['material_options'] = json_decode($validatedData['material_options'], true) ?? [];
        }

        $validatedData['is_featured'] = $validatedData['is_featured'] ?? false;
        
        $product->update($validatedData);

        // Refresh the product to get updated data
        $product->refresh();

        // Image URLs are automatically transformed by model accessors
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
        
        // Image URLs are automatically transformed by model accessors
        return response()->json($products);
    }

    /**
     * Toggle featured status of a product.
     */
    public function toggleFeatured(Product $product): JsonResponse
    {
        $product->update(['is_featured' => !$product->is_featured]);

        // Image URLs are automatically transformed by model accessors
        return response()->json([
            'message' => 'Product featured status updated successfully',
            'product' => $product
        ]);
    }
}

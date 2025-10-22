<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\EmailController;
use App\Http\Controllers\Api\CmsController;
use App\Http\Controllers\Api\ImageUploadController;
use App\Http\Controllers\Api\CatalogueController;

// Public routes
Route::post('/auth/login', [AuthController::class, 'login']);
Route::post('/auth/register', [AuthController::class, 'register']);

// Product routes (public - for frontend display)
Route::get('/products', [ProductController::class, 'index']);
Route::get('/products/{product}', [ProductController::class, 'show']);
Route::get('/products/featured', [ProductController::class, 'featured']);

// CMS routes (public - for frontend display)
Route::get('/cms/settings', [CmsController::class, 'index']);
Route::get('/cms/settings/group/{group}', [CmsController::class, 'getByGroup']);

// Catalogue routes (public - for frontend display)
Route::get('/catalogues', [CatalogueController::class, 'index']);
Route::get('/catalogues/{id}', [CatalogueController::class, 'show']);

// Email routes (public)
Route::post('/contact', [EmailController::class, 'sendContactEmail']);
Route::post('/newsletter/subscribe', [EmailController::class, 'subscribeNewsletter']);

// Protected routes (require authentication)
Route::middleware('auth:sanctum')->group(function () {
    // Auth routes
    Route::post('/auth/logout', [AuthController::class, 'logout']);
    Route::get('/auth/profile', [AuthController::class, 'profile']);
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    // Admin product management
    Route::prefix('admin')->group(function () {
        Route::get('/products', [ProductController::class, 'index']);
        Route::post('/products', [ProductController::class, 'store']);
        Route::get('/products/{product}', [ProductController::class, 'show']);
        Route::put('/products/{product}', [ProductController::class, 'update']);
        Route::delete('/products/{product}', [ProductController::class, 'destroy']);
        
        // Image upload route
        Route::post('/upload-image', [ImageUploadController::class, 'upload']);
        
        // CMS management routes
        Route::get('/cms/settings', [CmsController::class, 'index']);
        Route::post('/cms/settings', [CmsController::class, 'store']);
        Route::put('/cms/settings/{key}', [CmsController::class, 'update']);
        Route::post('/cms/settings/bulk-update', [CmsController::class, 'updateMultiple']);
        Route::get('/cms/settings/group/{group}', [CmsController::class, 'getByGroup']);

        // Catalogue management routes
        Route::get('/catalogues', [CatalogueController::class, 'index']);
        Route::post('/catalogues', [CatalogueController::class, 'store']);
        Route::get('/catalogues/{id}', [CatalogueController::class, 'show']);
        Route::put('/catalogues/{id}', [CatalogueController::class, 'update']);
        Route::delete('/catalogues/{id}', [CatalogueController::class, 'destroy']);
    });
    
    // Product management endpoints (keeping existing for compatibility)
    Route::patch('/products/{product}/toggle-featured', [ProductController::class, 'toggleFeatured']);
});

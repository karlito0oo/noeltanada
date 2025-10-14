<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;

class Product extends Model
{
    protected $fillable = [
        'name',
        'category',
        'image',
        'images',
        'type',
        'price',
        'availability',
        'date_added',
        'dimensions',
        'material',
        'description',
        'material_options',
        'is_featured'
    ];

    protected $casts = [
        'images' => 'array',
        'material_options' => 'array',
        'price' => 'decimal:2',
        'is_featured' => 'boolean',
        'date_added' => 'date'
    ];

    /**
     * Append image URLs to JSON output
     */
    protected $appends = ['image_url', 'images_urls'];

    /**
     * Get the full URL for the main image.
     */
    public function getImageUrlAttribute()
    {
        return $this->image ? asset('storage/' . $this->image) : null;
    }

    /**
     * Get the full URLs for all images.
     */
    public function getImagesUrlsAttribute()
    {
        if (!$this->images) return [];
        return array_map(function ($image) {
            return $image ? asset('storage/' . $image) : null;
        }, $this->images);
    }
}

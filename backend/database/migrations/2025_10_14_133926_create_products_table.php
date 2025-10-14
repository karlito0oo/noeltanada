<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('category');
            $table->string('image')->nullable();
            $table->json('images')->nullable(); // Array of image paths
            $table->string('type')->nullable();
            $table->decimal('price', 10, 2);
            $table->enum('availability', ['In Stock', 'Out of Stock'])->default('In Stock');
            $table->date('date_added')->nullable();
            $table->string('dimensions')->nullable();
            $table->string('material')->nullable();
            $table->text('description')->nullable();
            $table->json('material_options')->nullable(); // Array of material options
            $table->boolean('is_featured')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};

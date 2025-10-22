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
        Schema::table('catalogues', function (Blueprint $table) {
            // Rename image to image_url
            $table->renameColumn('image', 'image_url');
            
            // Add new columns
            $table->string('pdf_url')->nullable()->after('image_url');
            $table->integer('order')->default(0)->after('pdf_url');
            $table->boolean('is_active')->default(true)->after('order');
            
            // Drop old column
            $table->dropColumn('is_highlighted');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('catalogues', function (Blueprint $table) {
            $table->renameColumn('image_url', 'image');
            $table->dropColumn(['pdf_url', 'order', 'is_active']);
            $table->boolean('is_highlighted')->default(false);
        });
    }
};

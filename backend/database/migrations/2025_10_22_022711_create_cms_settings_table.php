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
        Schema::create('cms_settings', function (Blueprint $table) {
            $table->id();
            $table->string('key')->unique();
            $table->longText('value')->nullable();
            $table->string('type')->default('text'); // text, textarea, richtext, email, phone, etc.
            $table->string('group')->nullable(); // footer, header, general, etc.
            $table->string('label')->nullable(); // Human readable label
            $table->text('description')->nullable(); // Description for admin
            $table->boolean('is_active')->default(true);
            $table->timestamps();
            
            $table->index(['group', 'is_active']);
            $table->index('key');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cms_settings');
    }
};

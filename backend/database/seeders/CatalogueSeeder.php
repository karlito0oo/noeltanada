<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Catalogue;

class CatalogueSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $catalogues = [
            [
                'title' => '2024 Furniture Collection',
                'description' => 'Browse our latest collection of handcrafted furniture pieces, featuring modern designs and timeless classics.',
                'image_url' => '/catalouge1.png',
                'pdf_url' => null,
                'order' => 1,
                'is_active' => true,
            ],
            [
                'title' => 'Custom Design Portfolio',
                'description' => 'Explore our custom furniture designs and see how we can bring your vision to life with expert craftsmanship.',
                'image_url' => '/catalouge2.png',
                'pdf_url' => null,
                'order' => 2,
                'is_active' => true,
            ],
        ];

        foreach ($catalogues as $catalogue) {
            Catalogue::updateOrCreate(
                ['title' => $catalogue['title']],
                $catalogue
            );
        }
    }
}

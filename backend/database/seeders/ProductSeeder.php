<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeder.
     */
    public function run(): void
    {
        $products = [
            [
                'name' => 'PHILIBAR',
                'category' => 'CHAIR',
                'image' => 'products/Screenshot_270.png',
                'images' => ['products/Screenshot_270.png', 'products/Screenshot_271.png'],
                'type' => 'Chairs, Sofa, Bench',
                'price' => 9699.00,
                'availability' => 'In Stock',
                'date_added' => '2024-01-15',
                'dimensions' => 'W19/D18/H56',
                'material' => 'Indoor: Wood',
                'description' => 'A stylish chair with modern design and comfortable seating.',
                'material_options' => [
                    ['label' => 'with cushion', 'value' => 'cushion'],
                    ['label' => 'without cushion', 'value' => 'no-cushion'],
                ],
                'is_featured' => true,
            ],
            [
                'name' => 'SPARKIE ARM CHAIR',
                'category' => 'CHAIR',
                'image' => 'products/Screenshot_271.png',
                'images' => ['products/Screenshot_271.png', 'products/Screenshot_272.png'],
                'type' => 'Chairs, Sofa, Bench',
                'price' => 12500.00,
                'availability' => 'In Stock',
                'date_added' => '2024-01-20',
                'dimensions' => 'W21/D20/H58',
                'material' => 'Indoor: Wood & Fabric',
                'description' => 'Comfortable arm chair with ergonomic design and premium upholstery.',
                'material_options' => [
                    ['label' => 'fabric upholstery', 'value' => 'fabric'],
                    ['label' => 'leather upholstery', 'value' => 'leather'],
                ],
                'is_featured' => false,
            ],
            [
                'name' => 'LUGANO WITH HEAD REST',
                'category' => 'CHAIR',
                'image' => 'products/Screenshot_272.png',
                'images' => ['products/Screenshot_272.png', 'products/Screenshot_273.png'],
                'type' => 'Chairs, Sofa, Bench',
                'price' => 15200.00,
                'availability' => 'Out of Stock',
                'date_added' => '2024-02-10',
                'dimensions' => 'W22/D21/H62',
                'material' => 'Indoor: Wood & Premium Fabric',
                'description' => 'Executive chair with head rest for ultimate comfort and support.',
                'material_options' => [
                    ['label' => 'black leather', 'value' => 'black-leather'],
                    ['label' => 'brown leather', 'value' => 'brown-leather'],
                ],
                'is_featured' => true,
            ],
            [
                'name' => 'MODERN DINING TABLE',
                'category' => 'TABLE',
                'image' => 'products/Screenshot_280.png',
                'images' => ['products/Screenshot_280.png', 'products/Screenshot_281.png'],
                'type' => 'Table',
                'price' => 25000.00,
                'availability' => 'In Stock',
                'date_added' => '2024-03-05',
                'dimensions' => 'L180/W90/H75',
                'material' => 'Indoor: Solid Wood',
                'description' => 'Elegant dining table perfect for modern homes and families.',
                'material_options' => [
                    ['label' => 'oak finish', 'value' => 'oak'],
                    ['label' => 'walnut finish', 'value' => 'walnut'],
                ],
                'is_featured' => true,
            ],
            [
                'name' => 'BAMBOO PENDANT LIGHT',
                'category' => 'LIGHTING',
                'image' => 'products/Screenshot_290.png',
                'images' => ['products/Screenshot_290.png', 'products/Screenshot_291.png'],
                'type' => 'Lighting',
                'price' => 5500.00,
                'availability' => 'In Stock',
                'date_added' => '2024-03-15',
                'dimensions' => 'D35/H40',
                'material' => 'Indoor: Natural Bamboo',
                'description' => 'Sustainable bamboo pendant light for eco-conscious lighting solutions.',
                'material_options' => [
                    ['label' => 'natural finish', 'value' => 'natural'],
                    ['label' => 'dark stain', 'value' => 'dark'],
                ],
                'is_featured' => false,
            ]
        ];

        foreach ($products as $productData) {
            Product::create($productData);
        }
    }
}
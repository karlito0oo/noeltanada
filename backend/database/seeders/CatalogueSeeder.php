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
                'title' => 'Water Hyacinth',
                'description' => 'Once an invasive aquatic plant choking Philippine rivers, now transformed into woven furniture, bags, and lighting pieces that symbolize rebirth.',
                'image_url' => '/uploads/c1.png',
                'pdf_url' => null,
                'order' => 1,
                'is_active' => true,
            ],
            [
                'title' => 'Plastic Waste',
                'description' => 'Upcycled into durable, wood-like panels that are fire-resistant, water-proof, and termite-proof — turning pollution into innovation.',
                'image_url' => '/uploads/c2.png',
                'pdf_url' => null,
                'order' => 2,
                'is_active' => true,
            ],
            [
                'title' => 'Palochina',
                'description' => 'Recycled from shipping crates, this wood finds a second life as chairs, tables, and storage solutions.',
                'image_url' => '/uploads/c3.png',
                'pdf_url' => null,
                'order' => 3,
                'is_active' => true,
            ],
            [
                'title' => 'Rebar (Reinforcing Bars)',
                'description' => 'Industrial steel scraps repurposed into sleek, modern furniture frames.',
                'image_url' => '/uploads/c4.png',
                'pdf_url' => null,
                'order' => 4,
                'is_active' => true,
            ],
            [
                'title' => 'Doypacks (Beverage Cartons)',
                'description' => 'Upcycled into bags, accessories, and unique design accents.',
                'image_url' => '/uploads/c5.png',
                'pdf_url' => null,
                'order' => 5,
                'is_active' => true,
            ],
            [
                'title' => 'Bamboo',
                'description' => 'A timeless, sustainable Filipino material reinterpreted into bold and functional designs.',
                'image_url' => '/uploads/c6.png',
                'pdf_url' => null,
                'order' => 6,
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

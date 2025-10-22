<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\CmsSetting;

class CmsSettingsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $footerSettings = [
            [
                'key' => 'footer.address',
                'value' => '17 Valencia Street, Susana Heights Village, Tunasan, Muntinlupa City',
                'type' => 'textarea',
                'group' => 'footer',
                'label' => 'Company Address',
                'description' => 'Full company address for the footer'
            ],
            [
                'key' => 'footer.email',
                'value' => 'info@noeltanada.com',
                'type' => 'email',
                'group' => 'footer',
                'label' => 'Contact Email',
                'description' => 'Primary contact email address'
            ],
            [
                'key' => 'footer.phone',
                'value' => '+632 8123 4567',
                'type' => 'phone',
                'group' => 'footer',
                'label' => 'Phone Number',
                'description' => 'Primary contact phone number'
            ],
            [
                'key' => 'footer.terms_conditions',
                'value' => '<h2>Terms and Conditions</h2><p>Welcome to Noel Tañada. These terms and conditions outline the rules and regulations for the use of our website and services.</p><h3>1. Acceptance of Terms</h3><p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p><h3>2. Products and Services</h3><p>All furniture products are handcrafted with care. Custom orders may take 4-8 weeks for completion.</p><h3>3. Payment Terms</h3><p>Payment is required upon order confirmation. We accept major credit cards and bank transfers.</p><h3>4. Shipping and Delivery</h3><p>Delivery times vary based on location and product availability. Shipping costs will be calculated at checkout.</p>',
                'type' => 'richtext',
                'group' => 'footer',
                'label' => 'Terms & Conditions',
                'description' => 'Terms and conditions content (rich text)'
            ],
            [
                'key' => 'footer.faqs',
                'value' => '<h2>Frequently Asked Questions</h2><h3>Q: How long does delivery take?</h3><p>A: Delivery typically takes 2-4 weeks for standard items and 4-8 weeks for custom pieces.</p><h3>Q: Do you offer international shipping?</h3><p>A: Currently, we only ship within the Philippines. International shipping may be available for special orders.</p><h3>Q: Can I customize existing designs?</h3><p>A: Yes! We offer customization options for most of our furniture pieces. Contact us to discuss your requirements.</p><h3>Q: What materials do you use?</h3><p>A: We use high-quality sustainable wood and premium materials sourced from trusted suppliers.</p><h3>Q: Do you provide assembly service?</h3><p>A: Yes, we offer professional assembly service for an additional fee in Metro Manila area.</p>',
                'type' => 'richtext',
                'group' => 'footer',
                'label' => 'FAQs',
                'description' => 'Frequently asked questions content (rich text)'
            ],
            [
                'key' => 'footer.instagram',
                'value' => 'https://www.instagram.com/noeltanada',
                'type' => 'url',
                'group' => 'footer',
                'label' => 'Instagram URL',
                'description' => 'Instagram profile link'
            ],
            [
                'key' => 'footer.facebook',
                'value' => 'https://www.facebook.com/noeltanada',
                'type' => 'url',
                'group' => 'footer',
                'label' => 'Facebook URL',
                'description' => 'Facebook page link'
            ],
        ];

        foreach ($footerSettings as $setting) {
            CmsSetting::updateOrCreate(
                ['key' => $setting['key']],
                $setting
            );
        }
    }
}

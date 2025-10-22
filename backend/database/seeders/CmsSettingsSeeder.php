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

        // Showroom Settings
        $showroomSettings = [
            // Office & Showroom Section
            [
                'key' => 'showroom.office.title',
                'value' => 'Office & Showroom',
                'type' => 'text',
                'group' => 'showroom',
                'label' => 'Office Section Title',
                'description' => 'Title for the office and showroom section'
            ],
            [
                'key' => 'showroom.office.address',
                'value' => '17 Valencia Street, Susana Heights Village, Tunasan, Muntinlupa City',
                'type' => 'textarea',
                'group' => 'showroom',
                'label' => 'Office Address',
                'description' => 'Office and showroom address'
            ],
            [
                'key' => 'showroom.office.cellphone',
                'value' => '+63 995 324 3922',
                'type' => 'phone',
                'group' => 'showroom',
                'label' => 'Office Cellphone',
                'description' => 'Office cellphone number'
            ],
            [
                'key' => 'showroom.office.telephone',
                'value' => '(02) 8876-7285',
                'type' => 'phone',
                'group' => 'showroom',
                'label' => 'Office Telephone',
                'description' => 'Office telephone number'
            ],
            [
                'key' => 'showroom.office.hours',
                'value' => 'Monday – Saturday, 10:00 AM – 5:00 PM',
                'type' => 'text',
                'group' => 'showroom',
                'label' => 'Office Hours',
                'description' => 'Office operating hours'
            ],
            [
                'key' => 'showroom.office.weekend_visits',
                'value' => 'By appointment only',
                'type' => 'text',
                'group' => 'showroom',
                'label' => 'Weekend Visits',
                'description' => 'Weekend visit information'
            ],
            [
                'key' => 'showroom.office.weekend_contact',
                'value' => '+63 995 324 3922',
                'type' => 'phone',
                'group' => 'showroom',
                'label' => 'Weekend Contact',
                'description' => 'Contact number for weekend appointments'
            ],
            [
                'key' => 'showroom.office.deliveries',
                'value' => 'Monday – Saturday, 10:00 AM – 5:00 PM',
                'type' => 'text',
                'group' => 'showroom',
                'label' => 'Deliveries Schedule',
                'description' => 'Delivery schedule for office'
            ],
            [
                'key' => 'showroom.office.image1',
                'value' => '/uploads/s1.png',
                'type' => 'image',
                'group' => 'showroom',
                'label' => 'Office Main Image',
                'description' => 'Main showroom exterior image (large)'
            ],
            [
                'key' => 'showroom.office.image2',
                'value' => '/uploads/s2.png',
                'type' => 'image',
                'group' => 'showroom',
                'label' => 'Office Interior Image 1',
                'description' => 'First interior showroom image'
            ],
            [
                'key' => 'showroom.office.image3',
                'value' => '/uploads/s3.png',
                'type' => 'image',
                'group' => 'showroom',
                'label' => 'Office Interior Image 2',
                'description' => 'Second interior showroom image'
            ],
            
            // Workshop Section
            [
                'key' => 'showroom.workshop.title',
                'value' => 'Workshop',
                'type' => 'text',
                'group' => 'showroom',
                'label' => 'Workshop Section Title',
                'description' => 'Title for the workshop section'
            ],
            [
                'key' => 'showroom.workshop.address',
                'value' => 'Lot 639, Narra Rd., Bayanbayanan, San Pedro, Laguna 4023',
                'type' => 'textarea',
                'group' => 'showroom',
                'label' => 'Workshop Address',
                'description' => 'Workshop location address'
            ],
            [
                'key' => 'showroom.workshop.cellphone',
                'value' => '+63 995 324 3922',
                'type' => 'phone',
                'group' => 'showroom',
                'label' => 'Workshop Cellphone',
                'description' => 'Workshop cellphone number'
            ],
            [
                'key' => 'showroom.workshop.telephone',
                'value' => '(02) 8876-7285',
                'type' => 'phone',
                'group' => 'showroom',
                'label' => 'Workshop Telephone',
                'description' => 'Workshop telephone number'
            ],
            [
                'key' => 'showroom.workshop.hours',
                'value' => 'Monday – Saturday, 10:00 AM – 5:00 PM',
                'type' => 'text',
                'group' => 'showroom',
                'label' => 'Workshop Hours',
                'description' => 'Workshop operating hours'
            ],
            [
                'key' => 'showroom.workshop.weekend_visits',
                'value' => 'By appointment only',
                'type' => 'text',
                'group' => 'showroom',
                'label' => 'Workshop Weekend Visits',
                'description' => 'Weekend visit information for workshop'
            ],
            [
                'key' => 'showroom.workshop.weekend_contact',
                'value' => '+63 995 324 3922',
                'type' => 'phone',
                'group' => 'showroom',
                'label' => 'Workshop Weekend Contact',
                'description' => 'Contact number for workshop weekend appointments'
            ],
            [
                'key' => 'showroom.workshop.deliveries',
                'value' => 'Monday – Saturday, 10:00 AM – 5:00 PM',
                'type' => 'text',
                'group' => 'showroom',
                'label' => 'Workshop Deliveries Schedule',
                'description' => 'Delivery schedule for workshop'
            ],
            [
                'key' => 'showroom.workshop.image1',
                'value' => '/uploads/w1.png',
                'type' => 'image',
                'group' => 'showroom',
                'label' => 'Workshop Image 1',
                'description' => 'First workshop image'
            ],
            [
                'key' => 'showroom.workshop.image2',
                'value' => '/uploads/w2.png',
                'type' => 'image',
                'group' => 'showroom',
                'label' => 'Workshop Image 2',
                'description' => 'Second workshop image'
            ],
        ];

        foreach ($showroomSettings as $setting) {
            CmsSetting::updateOrCreate(
                ['key' => $setting['key']],
                $setting
            );
        }
    }
}

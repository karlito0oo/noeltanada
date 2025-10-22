<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class CmsSetting extends Model
{
    use HasFactory;

    protected $fillable = [
        'key',
        'value',
        'type',
        'group',
        'label',
        'description',
        'is_active'
    ];

    protected $casts = [
        'is_active' => 'boolean',
    ];

    /**
     * Get settings by group
     */
    public static function getByGroup($group)
    {
        return self::where('group', $group)
            ->where('is_active', true)
            ->pluck('value', 'key');
    }

    /**
     * Get all settings as key-value pairs
     */
    public static function getAllSettings()
    {
        return self::where('is_active', true)
            ->pluck('value', 'key');
    }

    /**
     * Set a setting value
     */
    public static function setSetting($key, $value, $type = 'text', $group = null, $label = null, $description = null)
    {
        return self::updateOrCreate(
            ['key' => $key],
            [
                'value' => $value,
                'type' => $type,
                'group' => $group,
                'label' => $label,
                'description' => $description,
                'is_active' => true
            ]
        );
    }

    /**
     * Get a setting value by key
     */
    public static function getSetting($key, $default = null)
    {
        $setting = self::where('key', $key)
            ->where('is_active', true)
            ->first();
        
        return $setting ? $setting->value : $default;
    }
}

<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
class Category extends Model
{
    protected $guraded=[]; 
    protected $table="categories";
    protected $fillable = [
        'name', 'slug'
    ];
}

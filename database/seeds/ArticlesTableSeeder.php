<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ArticlesTableSeeder extends Seeder
{
    public function run()
    {
        $param=[
            // 'id'=>1,
            'created_at'=>'1923-03-15 14:53:21',
            'content'=>'けそポテトの投稿',
            'member_id'=>1,
        ];
        DB::table('articles')->insert($param);
        $param=[
            // 'id'=>2,
            'created_at'=>'1923-03-15 14:53:21',
            'content'=>'はねむーんの投稿',
            'member_id'=>2,
        ];
        DB::table('articles')->insert($param);
        $param=[
            // 'id'=>3,
            'created_at'=>'1923-03-15 14:53:21',
            'content'=>'けそポテトの投稿',
            'member_id'=>1,
        ];
        DB::table('articles')->insert($param);
    }
}

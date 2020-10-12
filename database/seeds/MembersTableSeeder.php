<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MembersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $param=[
            'created_at'=>date("Y-m-d H:i:s"),
            'name'=>'けそポテト',
            'user_id'=>'keso_niconico',
            'password'=>123456789,
            'email'=>'user@example.com',
            'icon'=>'https://tk.ismcdn.jp/mwimgs/e/b/1140/img_eb31afc9c1fb914d68a7c73b657c7ebe183087.jpg',
        ];
        DB::table('members')->insert($param);
        $param=[
            'created_at'=>date("Y-m-d H:i:s"),
            'name'=>'はねむーん',
            'user_id'=>'hanemoon920',
            'password'=>123456789,
            'email'=>'user@example.com',
            'icon'=>'https://tk.ismcdn.jp/mwimgs/e/b/1140/img_eb31afc9c1fb914d68a7c73b657c7ebe183087.jpg',
        ];
        DB::table('members')->insert($param);
        $param=[
            'created_at'=>date("Y-m-d H:i:s"),
            'name'=>'太郎',
            'user_id'=>'taro',
            'password'=>123456789,
            'email'=>'user@example.com',
            'icon'=>'https://tk.ismcdn.jp/mwimgs/e/b/1140/img_eb31afc9c1fb914d68a7c73b657c7ebe183087.jpg',
        ];
        DB::table('members')->insert($param);
        $param=[
            'created_at'=>date("Y-m-d H:i:s"),
            'name'=>'太郎2',
            'user_id'=>'taro2',
            'password'=>123456789,
            'email'=>'user@example.com',
            'icon'=>'https://tk.ismcdn.jp/mwimgs/e/b/1140/img_eb31afc9c1fb914d68a7c73b657c7ebe183087.jpg',
        ];
        DB::table('members')->insert($param);
        
    }
}

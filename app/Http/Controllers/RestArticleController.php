<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Article;
use App\Member;
class RestArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $memberId=$request['member_id'];
        $userInfo=Member::find($memberId)->toArray();
        $articles=Member::find($memberId)->articles->toArray();
        foreach($articles as &$article){
            $article['user_id']=$userInfo['user_id'];
            $article['icon']=$userInfo['icon'];
            $article['header']=$userInfo['header'];
            $article['name']=$userInfo['name'];
        }
        return $articles;
        
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $memberId=$request['member_id'];
        $data=$request->all();
        $nextId = DB::table('articles')->max('id') + 1;
        $param=[
            // 'id'=>1,
            'created_at'=>date("Y-m-d H:i:s"),
            'content'=>$data['text'],
            'member_id'=>$memberId,
        ];
        DB::table('articles')->insert($param);
        return [
            'id'=>$nextId,
            'member_id'=>$memberId,
            'created_at'=>date("Y-m-d H:i:s"),
            'content'=>$data['text'],
        ];
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}

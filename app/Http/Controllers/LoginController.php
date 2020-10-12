<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Member;

class LoginController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
        $env = "http://localhost:8000/images/";
        $data = $request->all();
        $userId = $data['userId'];
        $pass = $data['pass'];

        $member = Member::where('user_id', $userId)->first();
        $pass = Member::where('password', $pass)->first();
        if ($member == null || $pass==null) return 'a';
        $member = $member->toArray();

        $array = [
            "userName" => $member['name'],
            "userId" => $member['user_id'],
            "iconUrl" => $member['icon'],
            "postImageUrl" => $member['header'],
        ];
        return $array;
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

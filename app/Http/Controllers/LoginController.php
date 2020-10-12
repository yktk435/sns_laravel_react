<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Member;
use App\Token;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

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
        $accessToken = Str::random(60);

        $memberTable = Member::where('user_id', $userId)->first();
        $pass = Member::where('password', $pass)->first();


        if ($memberTable == null || $pass == null) return 'a';
        $member = $memberTable->toArray();
        
        $tokenTable = Token::where('member_id', $member['id']);
        if ($tokenTable != null) {

            DB::table('tokens')->where('member_id',$member['id'])->update(["access_token" => $accessToken]);
        } else {
            DB::table('tokens')->insert([
                "member_id" => $member['id'],
                'created_at' => date("Y-m-d H:i:s"),
                "access_token" => $accessToken
            ]);
        }

        $array = [
            "userName" => $member['name'],
            "userId" => $member['user_id'],
            "iconUrl" => $member['icon'],
            "headerUrl" => $member['header'],
            "accessToken" => $accessToken,
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

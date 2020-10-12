<?php

namespace App\Http\Middleware;

use Closure;
use App\Token;
use Symfony\Component\VarDumper\VarDumper;

class LoginCheckMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $csrfToken = $request->header('x-csrf-token');
        // $accessToken = $request->header('access_token');
        $accessToken = "qwertyuiopasdfghjkl";
        $tokens = [
            "csrfToke" => $csrfToken,
            "access_token" => $accessToken
        ];

        $accountExist=Token::where('access_token',$accessToken)->first();
        if ($tokens["access_token"] == null || $accountExist==null) {
            // アクセストークンがないもしくはアクセストークンが違うからログインへリダイレクト
            return redirect('/login');
        }
        $request->merge(["laravelData" => ["member_id"=>$accountExist->toArray()['member_id']]]);
        // print_r (json_encode($tokens));
        return $next($request);
    }
}

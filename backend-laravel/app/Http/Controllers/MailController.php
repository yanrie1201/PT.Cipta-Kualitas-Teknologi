<?php
  
namespace App\Http\Controllers;
  
use Illuminate\Http\Request;
use Mail;
use App\Mail\Email;
  
class MailController extends Controller
{
    /**
     * Write code on Method
     *
     * @return response()
     */
    public function index(Request $request)
    {
        $COMPANY_EMAIL = 'xxxandasln@gmail.com';
        $request->validate([
            'title' => 'required',
            'name' => 'required',
            'description' => 'required',
            'email' => 'required|email',
            'phone' => 'required'
        ]);
        $mailData = [
            'title' => $request->title,
            'description' => $request->description,
            'email' => $request->email,
            'phone' => $request->phone,
            'name' => $request->name,
            // 'title' => 'This is a Dummy Email',
            // 'description' => 'dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy',
            // 'email' => 'dummy@example.com',
            // 'phone' => '08575',
            // 'name' => 'John Doemmy',
        ];
         
        Mail::to($COMPANY_EMAIL)->send(new Email($mailData));
           
        return reponse()->json(['success' => 'Email sent successfully'], 200);
    }
}
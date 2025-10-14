<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use App\Mail\ContactFormMail;
use App\Mail\ContactConfirmationMail;

class EmailController extends Controller
{
    /**
     * Send contact form email
     */
    public function sendContactEmail(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email',
            'phone' => 'nullable|string|max:20',
            'subject' => 'required|string|max:255',
            'message' => 'required|string|max:2000'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Validation error',
                'errors' => $validator->errors()
            ], 422);
        }

        $data = $request->all();
        
        try {
            // Send email to admin
            Mail::to('info.alphaddsi@gmail.com')
                ->send(new ContactFormMail($data));

            // Send confirmation email to user  
            Mail::to($data['email'])
                ->send(new ContactConfirmationMail($data));

            return response()->json([
                'success' => true,
                'message' => 'Email sent successfully'
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to send email',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Send newsletter subscription email
     */
    public function subscribeNewsletter(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'name' => 'nullable|string|max:255'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Validation error',
                'errors' => $validator->errors()
            ], 422);
        }

        $data = $request->all();
        
        try {
            // Send welcome email to subscriber
            Mail::send('emails.newsletter-welcome', $data, function ($mail) use ($data) {
                $mail->to($data['email'], $data['name'] ?? 'Subscriber')
                     ->subject('Welcome to Noel Tañada Newsletter');
            });

            // Notify admin about new subscription
            Mail::send('emails.new-subscriber', $data, function ($mail) use ($data) {
                $mail->to(config('mail.admin_email', 'admin@noeltanada.com'))
                     ->subject('New Newsletter Subscription');
            });

            return response()->json([
                'success' => true,
                'message' => 'Newsletter subscription successful'
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to subscribe to newsletter',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}

<!DOCTYPE html>
<html>
<head>
    <title>New Contact Form Submission</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background-color: #f5f3f0;
            padding: 20px;
            text-align: center;
            border-radius: 5px;
            margin-bottom: 20px;
        }
        .content {
            background-color: #fff;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
        .field {
            margin-bottom: 15px;
        }
        .field strong {
            display: inline-block;
            width: 100px;
            color: #555;
        }
    </style>
</head>
<body>
    <div class="header">
        <h2>New Contact Form Submission</h2>
        <p>You have received a new message from your website contact form.</p>
    </div>
    
    <div class="content">
        <div class="field">
            <strong>Name:</strong> {{ $name }}
        </div>
        
        <div class="field">
            <strong>Email:</strong> {{ $email }}
        </div>
        
        @if(isset($phone) && $phone)
        <div class="field">
            <strong>Phone:</strong> {{ $phone }}
        </div>
        @endif
        
        <div class="field">
            <strong>Subject:</strong> {{ $subject }}
        </div>
        
        <div class="field">
            <strong>Message:</strong>
            <p style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 5px;">
                {{ $messagee }}
            </p>
        </div>
    </div>
    
    <div style="margin-top: 20px; text-align: center; color: #666; font-size: 12px;">
        <p>This email was sent from the Noel Tañada website contact form.</p>
    </div>
</body>
</html>

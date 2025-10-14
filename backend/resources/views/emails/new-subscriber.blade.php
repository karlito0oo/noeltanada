<!DOCTYPE html>
<html>
<head>
    <title>New Newsletter Subscription</title>
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
        <h2>New Newsletter Subscription</h2>
        <p>Someone has subscribed to your newsletter.</p>
    </div>
    
    <div class="content">
        <div class="field">
            <strong>Email:</strong> {{ $email }}
        </div>
        
        @if(isset($name) && $name)
        <div class="field">
            <strong>Name:</strong> {{ $name }}
        </div>
        @endif
        
        <div class="field">
            <strong>Date:</strong> {{ date('F j, Y g:i A') }}
        </div>
    </div>
    
    <div style="margin-top: 20px; text-align: center; color: #666; font-size: 12px;">
        <p>This notification was sent from the Noel Tañada website newsletter subscription form.</p>
    </div>
</body>
</html>

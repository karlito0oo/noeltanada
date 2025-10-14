<!DOCTYPE html>
<html>
<head>
    <title>Thank You for Contacting Noel Tañada</title>
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
            background-color: #7d6040;
            color: white;
            padding: 30px 20px;
            text-align: center;
            border-radius: 5px;
            margin-bottom: 20px;
        }
        .content {
            background-color: #fff;
            padding: 30px 20px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
        .footer {
            margin-top: 20px;
            text-align: center;
            color: #666;
            font-size: 14px;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>Thank You!</h1>
        <p>We've received your message</p>
    </div>
    
    <div class="content">
        <p>Dear {{ $name }},</p>
        
        <p>Thank you for reaching out to us. We have received your message regarding "<strong>{{ $subject }}</strong>" and appreciate you taking the time to contact us.</p>
        
        <p>Our team will review your message and get back to you within 24-48 hours. If your inquiry is urgent, please don't hesitate to call us directly.</p>
        
        <p>We look forward to assisting you with your furniture needs and sharing our passion for sustainable, handcrafted pieces.</p>
        
        <p>Best regards,<br>
        <strong>The Noel Tañada Team</strong><br>
        EcoHomeArt</p>
        
        <hr style="margin: 30px 0; border: 0; border-top: 1px solid #eee;">
        
        <h3>Your Message Summary:</h3>
        <p><strong>Subject:</strong> {{ $subject }}</p>
        <p><strong>Message:</strong></p>
        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; border-left: 4px solid #7d6040;">
            {{ $messagee }}
        </div>
    </div>
    
    <div class="footer">
        <p>Noel Tañada | Sustainable Furniture Design</p>
        <p>17 Valencia Street, Susana Heights Village, Tunasan, Muntinlupa City</p>
        <p>Phone: +63 995 324 3922 | Email: info@noeltanada.com</p>
    </div>
</body>
</html>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Oficina de Regeneração da Mata Atlântica - Ecovila Sustentar</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #282c34;
            color: #fff;
            text-align: center;
        }

        header {
            padding: 20px;
        }

        .logo {
            width: 200px;
            margin-bottom: 20px;
        }

        .btn-ingressos {
            background-color: #ccc;
            border: none;
            border-radius: 25px;
            padding: 15px 30px;
            font-size: 18px;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        .btn-ingressos:hover {
            background-color: #fff;
            color: #000;
        }

        h1 {
            font-size: 32px;
            font-weight: bold;
            color: #fff;
            margin: 20px 0;
        }

        p {
            font-size: 18px;
            margin: 10px 0;
        }

        .event-image {
            background-color: #555;
            width: 300px;
            height: 200px;
            margin: 20px auto;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
            font-size: 16px;
        }

        .social-links a {
            display: block;
            color: #fff;
            margin: 10px 0;
            text-decoration: none;
        }

        iframe {
            width: 80%;
            height: 300px;
            margin-top: 20px;
            border: none;
        }

        form {
            margin: 30px 0;
        }

        input, textarea {
            padding: 10px;
            margin: 10px;
            width: 80%;
            max-width: 400px;
            border-radius: 5px;
            border: none;
        }

        button {
            padding: 10px 20px;
            background-color: #ffcc00;
            border: none;
            border-radius: 25px;
            cursor: pointer;
            font-size: 16px;
            margin-top: 10px;
            transition: background-color 0.3s;
        }

        button:hover {
            background-color: #ff9900;
        }
    </style>
</head>
<body>

    <header>
        <img src="https://www.ecovilasustentar.eco.br/images/logo.png" alt="Logo Ecovila Sustentar" class="logo">
        <button class="btn-ingressos" onclick="window.open('https://www.instagram.com/ecovilasustentar/', '_blank')">Ingressos</button>
    </header>

    <main>
        <h1>Oficina de Regeneração da Mata Atlântica - Ecovila Sustentar</h1>
        <p>Oficina regenerativa de Agrofloresta, Meio Ambiente, Conexão com Pessoas, Fogueira e Comida Saudável.</p>
        <p>A Agrofloresta regenerativa é um método de construir junto à Natureza utilizando métodos de permacultura.</p>

        <div class="event-image">Figura Arte do Evento</div>

        <h2>REDES SOCIAIS</h2>
        <div class="social-links">
            <a href="https://www.instagram.com/ecovilasustentar/" target="_blank">Instagram: @ecovilasustentar</a>
            <a href="https://www.ecovilasustentar.eco.br/" target="_blank">Website: www.ecovilasustentar.eco.br</a>
        </div>

        <!-- Google Maps Static Iframe -->
        <iframe 
            src="<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.6825768526583!2d-46.849194925164305!3d-23.865402872831694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cfb5c0594dd00f%3A0x73765541ef593005!2sEcovila%20SusTentar%3A%20hospedagens%20e%20viv%C3%AAncias%20na%20Natureza!5e0!3m2!1sen!2sbr!4v1728675576562!5m2!1sen!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>" 
            allowfullscreen="">
        </iframe>

        <h2>Quero Participar da Oficina de Agrofloresta</h2>
        <form id="signupForm">
            <input type="text" id="name" name="name" placeholder="Nome" required><br>
            <input type="email" id="email" name="email" placeholder="Email" required><br>
            <input type="tel" id="whatsapp" name="whatsapp" placeholder="Whatsapp" required><br>
            <textarea id="message" name="message" rows="4" placeholder="Mensagem" required></textarea><br>
            <button type="submit">Enviar</button>
        </form>
    </main>

    <script>
        // Manipulação do formulário para redirecionar para o WhatsApp
        document.getElementById('signupForm').addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const whatsapp = document.getElementById('whatsapp').value;
            const message = document.getElementById('message').value;

            // Constrói a URL para o WhatsApp
            const whatsappUrl = `https://wa.me/5511999999999?text=
                Nome: ${encodeURIComponent(name)}%0A
                Email: ${encodeURIComponent(email)}%0A
                Whatsapp: ${encodeURIComponent(whatsapp)}%0A
                Mensagem: ${encodeURIComponent(message)}`;

            // Abre o WhatsApp em uma nova aba
            window.open(whatsappUrl, '_blank');
        });
    </script>

</body>
</html>

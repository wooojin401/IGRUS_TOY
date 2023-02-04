module.exports = {
    HTML: function (title, body) {
      return `
      <!doctype html>
      <html>
      <head>    
        <title>Login TEST - ${title}</title>
        <meta charset="utf-8">
        
      </head>
      <body>
        <div class="background">
          ${body}
        </div>
      </body>
      </html>
      `;
    }
  }
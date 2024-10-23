var btn = document.getElementById('botao');
botao.addEventListener("click", verificaData);
<div style="clear:both; margin-top:0em; margin-bottom:1em;"><a href="http://www.devwilliam.com.br/linux/grep-pesquisar-palavras-e-arquivos-linux" target="_blank" rel="nofollow" class="u07434c3b7093c91ddd744645a8386342"><!-- INLINE RELATED POSTS 1/3 //--><style> .u07434c3b7093c91ddd744645a8386342 , .u07434c3b7093c91ddd744645a8386342 .postImageUrl , .u07434c3b7093c91ddd744645a8386342 .centered-text-area { min-height: 80px; position: relative; } .u07434c3b7093c91ddd744645a8386342 , .u07434c3b7093c91ddd744645a8386342:hover , .u07434c3b7093c91ddd744645a8386342:visited , .u07434c3b7093c91ddd744645a8386342:active { border:0!important; } .u07434c3b7093c91ddd744645a8386342 .clearfix:after { content: ""; display: table; clear: both; } .u07434c3b7093c91ddd744645a8386342 { display: block; transition: background-color 250ms; webkit-transition: background-color 250ms; width: 100%; opacity: 1; transition: opacity 250ms; webkit-transition: opacity 250ms; background-color: #2980B9; box-shadow: 0 1px 2px rgba(0, 0, 0, 0.17); -moz-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.17); -o-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.17); -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.17); } .u07434c3b7093c91ddd744645a8386342:active , .u07434c3b7093c91ddd744645a8386342:hover { opacity: 1; transition: opacity 250ms; webkit-transition: opacity 250ms; background-color: #D35400; } .u07434c3b7093c91ddd744645a8386342 .centered-text-area { width: 100%; position: relative; } .u07434c3b7093c91ddd744645a8386342 .ctaText { border-bottom: 0 solid #fff; color: #ECF0F1; font-size: 16px; font-weight: bold; margin: 0; padding: 0; text-decoration: underline; } .u07434c3b7093c91ddd744645a8386342 .postTitle { color: #FFFFFF; font-size: 16px; font-weight: 600; margin: 0; padding: 0; width: 100%; } .u07434c3b7093c91ddd744645a8386342 .ctaButton { background-color: #3498DB!important; color: #ECF0F1; border: none; border-radius: 3px; box-shadow: none; font-size: 14px; font-weight: bold; line-height: 26px; moz-border-radius: 3px; text-align: center; text-decoration: none; text-shadow: none; width: 80px; min-height: 80px; background: url(http://www.devwilliam.com.br/wp-content/plugins/intelly-related-posts/assets/images/simple-arrow.png)no-repeat; position: absolute; right: 0; top: 0; } .u07434c3b7093c91ddd744645a8386342:hover .ctaButton { background-color: #E67E22!important; } .u07434c3b7093c91ddd744645a8386342 .centered-text { display: table; height: 80px; padding-left: 18px; top: 0; } .u07434c3b7093c91ddd744645a8386342 .u07434c3b7093c91ddd744645a8386342-content { display: table-cell; margin: 0; padding: 0; padding-right: 108px; position: relative; vertical-align: middle; width: 100%; } .u07434c3b7093c91ddd744645a8386342:after { content: ""; display: block; clear: both; } </style><div class="centered-text-area"><div class="centered-text" style="float: left;"><div class="u07434c3b7093c91ddd744645a8386342-content"><span class="ctaText">Post relacionado:</span>  <span class="postTitle">GREP - pesquisar palavras e arquivos no linux | Dica</span></div></div></div><div class="ctaButton"></div></a></div>
/* Captura a data e o período, chama a função isDataValida() e captura o retorno */
function verificaData(){
     var data = document.getElementById('data').value;

     if (isDataValida(data, 30)){
	alert('Passou');
     }else{
	alert('Não passou');
     }
}

/* Valida se a data passada como parâmetro está dentro do período informado */
function isDataValida(data, periodo){
    var arrayData = data.split('/');
    var campoDia = parseInt(arrayData[0]); 
    var campoMes = parseInt(arrayData[1]); 
    var campAno = parseInt(arrayData[2]);

    var dataUsuario = new Date();
    dataUsuario.setDate(campoDia);
    dataUsuario.setMonth(campoMes -1);
    dataUsuario.setFullYear(campAno);

    var dataLimite = new Date();
    dataLimite.setDate(dataLimite.getDate() + periodo);

    if(dataUsuario.getTime() <= dataLimite.getTime()){
    	return true;
    }else{
    	return false;
    }
}
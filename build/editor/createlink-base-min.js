YUI.add("createlink-base",function(B){var A={};A.STRINGS={PROMPT:"Please enter the URL for the link to point to:",DEFAULT:"http://"};B.namespace("Plugin");B.Plugin.CreateLinkBase=A;B.mix(B.Plugin.ExecCommand.COMMANDS,{createlink:function(H){var G=this.get("host").getInstance(),E,C,F,D=prompt(A.STRINGS.PROMPT,A.STRINGS.DEFAULT);if(D){this.get("host")._execCommand(H,D);F=new G.Selection();E=F.getSelected();if(!F.isCollapsed&&E.size()){C=E.item(0).one("a");if(C){E.item(0).replace(C);}}else{this.get("host").execCommand("inserthtml",'<a href="'+D+'">'+D+"</a>");}}return C;}});},"@VERSION@",{requires:["editor-base"],skinnable:false});
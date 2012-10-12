Agu3l = new Ext.Application({
	name: "Agu3l",
	
	launch: function() 
	{

	var presentation = new Ext.Panel({
	    title: 'Accueil',
	    iconCls: 'home',
	    html:"<div class='presentation'>\
            <img id='logo' src='img/logo-agu3l.png' />\
            <h1>Association Grufféenne des Utilisateurs de Linux et de Logiciels Libres</h1>\
            <br />\
				<p>Promotion et utilisation de Linux et des logiciels libres.</p>\
				<p>Découverte, utilisation, accompagnement. Installation sur votre machine.</p>\
				<p>Convivialité, créativité, partage.</p>\
				<br />\
				<p><a href='http://www.agu3l.org' alt='Site web AGU3L'>AGU3L en ligne</a>.</p>\
	          </div>"
	});
	
	var linux = new Ext.Panel({
	    title: 'GNU/Linux',
	    iconCls: 'favorites',
	    scroll: 'vertical',
	    html: "<div class='presentation'>\
		    <img id='logo' src='img/logo-linux.png' />\
		    	<p>GNU/Linux est le nom d'un logiciel appartenant à la catégorie appelée « système d'exploitation », grâce auxquels on peut utiliser les ordinateurs : exécuter des programmes, manipuler des fichiers...</p>\
				<p>Il appartient à la grande famille des systèmes Unix ouverts et relève aussi de la catégorie des logiciels dits « libres », au code source disponible, forgés par et pour leurs utilisateurs.</p>\
				<p>Les logiciels libres ou commerciaux disponibles pour Linux couvrent tous les besoins : éditeurs, outils de développement, logiciel de gestion des services réseau (impression, données et applications, messagerie électroniques, Usenet ...), applications scientifiques, suites bureautique, interfaces graphiques, jeux ...</p>\
				<p>GNU/Linux est diffusé sous forme de « distributions », ensembles complets et cohérents de programmes grâce auxquels on peut installer un système utilisable. Elles sont mises à disposition sur Internet et sur des CD commercialisés.</p>\
				<p>Les grandes distributions linux :</p>\
				<p>Débian</p>\
	           </div>"
	});
	
	var logiciels = new Ext.Panel({
	    title: 'Logiciels libres',
	    iconCls: 'bookmarks',
	    scroll: 'vertical',
	    html: "<div class='presentation'>\
		    		<img id='logo' src='img/gnu.png' />\
		            <p>Un « logiciel libre » se réfère à la liberté, pas au prix. Pour comprendre le concept, vous devez pensez à « libre » comme dans « liberté d'expression », pas comme dans « bière gratuite ». (NdT : en anglais, le mot « free » veut dire libre, mais aussi gratuit, d'oÃ¹ la confusion possible).<br />\
		            Les logiciels libres donnent aux utilisateurs la liberté d'exécuter, de copier, de distribuer, d'étudier, de modifier et d'améliorer les logiciels. Plus précisément, cela se réfère à quatre types de liberté pour les utilisateurs de logiciels :<br />\
		            <ul><li>La liberté d'exécuter le programme, pour n'importe quel usage (liberté 0).</li>\
		            <li>La liberté d'étudier le fonctionnement du programme et de l'adapter à vos besoins (liberté 1). Accéder au code source est une condition nécessaire pour cela.</li>\
		            <li>La liberté de redistribuer des copies pour aider votre prochain (liberté 2).</li></p>\
		            <li>La liberté d'améliorer le programme et de rendre publiques vos améliorations pour que toute la communauté en bénéficie (liberté 3). Accéder au code source est une condition nécessaire pour cela.<li>\
		            <a href='http://www.gnu.org/philosophy/free-sw.fr.html'>Voir la définiton complète en ligne</a><br />\
		            <br />\
		            La Licence publique générale de GNU (en anglais General Public License) est souvent appelée de l'acronyme « GNU GPL » ou « GPL de GNU ». C'est la licence de la plupart des programmes GNU et de plus de la moitié de l'ensemble des logiciels libres actuellement distribués. La dernière version est la version 3.<br />\
		            <a href='http://www.gnu.org/licenses/gpl.html'>Lire la licence originale en ligne</a></p>\
		            <a href='http://fsffrance.org/gpl/gpl-fr.fr.html'>Lire la licence originale traduite en français en ligne</a></p>\
	           </div>"
	});


	var agenda = new Ext.Panel({
	    title: 'Agenda',
	    iconCls: 'time',
	    scroll: 'vertical',
	    html: "<div class='presentation'>\
	    			<h1>Agenda 2012 - 2013</h1>\
	    			<br/>\
	    			<p class='titreJob'>Assemblée générale : </p>\
					<p class='dateJob'>vendredi 14 octobre 2012 - Lieu : Gruffy</p>\
					<br/>\
					<p class='titreJob'>Thème : </p>\
					<p class='dateJob'>vendredi 28 octobre 2012 - Lieu : Gruffy</p>\
					<br/>\
					<p class='titreJob'>Thème : </p>\
					<p class='dateJob'>25 novembre 2011 - Lieu : Gruffy</p>\
					<br/>\
					<p class='titreJob'>Thème : </p>\
					<p class='dateJob'>9 décembre 2011 - Lieu : Gruffy</p>\
					<br/>\
					<p class='titreJob'>Thème : </p>\
					<p class='dateJob'>23 décembre 2011 - Lieu : Gruffy</p>\
					<br/>\
					<p class='titreJob'>Thème : </p>\
					<p class='dateJob'>6 janvier 2012 - Lieu : Gruffy</p>\
					<br/>\
					<p class='titreJob'>Thème : </p>\
					<p class='dateJob'>20 janvier 2012 - Lieu : Gruffy</p>\
					<br/>\
					<p class='titreJob'>Thème : </p>\
					<p class='dateJob'>3 février 2012 - Lieu : Gruffy</p>\
	           </div>",
		badgeText: '8'
	});
	
	var contact = new Ext.Panel({
		 title: 'Contact',
	    iconCls: 'user',
	    scroll: 'vertical',
	    items: [{
	        title: 'Basic',
	        xtype: 'form',
	        id: 'basicform',
	        scroll: 'vertical',
	        items: [{
	            xtype: 'fieldset',
	            title: 'Informations personnelles',
	            instructions: 'Veuillez saisir les informations nécessaires.',
	            defaults: {
	                // labelAlign: 'right'
	                labelWidth: '35%'
	            },
	            items: [{
	                xtype: 'textfield',
	                name: 'name',
	                label: 'Nom',
	                placeHolder: 'Mr Smith',
	                autoCapitalize : true,
	                required: true,
	                useClearIcon: true
	            }, {
	                xtype: 'textfield',
	                name: 'prenom',
	                label: 'Prénom',
	                autoCapitalize : true,
	                required: true,
	                useClearIcon: true
	            }, {
	                xtype: 'emailfield',
	                name: 'email',
	                label: 'Email',
	                placeHolder: 'moi@fournisseur.fr',
	                useClearIcon: true
	            }, {
	                xtype: 'datepickerfield',
	                name: 'birthday',
	                label: 'Date de naissance',
	                picker: { yearFrom: 1900 }
	            }, {
	                xtype: 'selectfield',
	                name: 'rank',
	                label: 'Niveau en informatique',
	                options: [{
	                    text: 'Novice',
	                    value: 'novice'
	                }, {
	                    text: 'Débutant',
	                    value: 'debutant'
	                }, {
	                    text: 'Pratiquant régulier',
	                    value: 'pratiquant'
	                }, {
	                    text: 'Root',
	                    value: 'root'
	                }]
	            }, {
	                xtype: 'hiddenfield',
	                name: 'secret',
	                value: false
	            }, {
	                xtype: 'textfield',
	                name: 'adresse',
	                label: 'Adresse (Ville)',
	                useClearIcon: true
	            }, {
	                xtype: 'textareafield',
	                name: 'question',
	                label: 'Ma question'
	            }]
	        }, {
	            layout: 'vbox',
	            defaults: {xtype: 'button', flex: 1, style: 'margin: .5em;'},
	            items: [{
	                text: 'Disable fields',
	                scope: this,
	                hasDisabled: false,
	                handler: function(btn){
	                    var form = Ext.getCmp('basicform');
	
	                    if (btn.hasDisabled) {
	                        form.enable();
	                        btn.hasDisabled = false;
	                        btn.setText('Disable fields');                      
	                    } else {
	                        form.disable();
	                        btn.hasDisabled = true;
	                        btn.setText('Enable fields');
	                    }
	                }
	            }, {
	                text: 'Reset form',
	                handler: function(){
	                    Ext.getCmp('basicform').reset();
	                }
	            }]
	        }]
	    }, {
	        title: 'Sliders',
	        xtype: 'form',
	        items: [{
	            xtype: 'fieldset',
	            defaults: {
	                labelAlign: 'right'
	            },
	            items: [{
	                xtype: 'sliderfield',
	                name: 'value',
	                label: 'Value'
	            }, {
	                xtype: 'togglefield',
	                name: 'enable',
	                label: 'Enable'
	            }]
	        }]
	    }, {
	        title: 'Toolbars',
	        styleHtmlContent: true,
	        xtype: 'form',
	        scroll: 'vertical',
	        html: "A human being should be able to change a diaper, plan an invasion, butcher a hog, conn a ship, design a building, write a sonnet, balance accounts, build a wall, set a bone, comfort the dying, take orders, give orders, cooperate, act alone, solve equations, analyze a new problem, pitch manure, program a computer, cook a tasty meal, fight efficiently, die gallantly. - RAH",
	        dockedItems: [{
	            xtype: 'toolbar',
	            dock: 'top',
	            items: [{
	                xtype: 'searchfield',
	                placeHolder: 'Search',
	                name: 'searchfield'
	            }]
	        },
	        {
	            xtype: 'toolbar',
	            dock: 'top',
	            items: [{
	                xtype: 'textfield',
	                placeHolder: 'Text',
	                name: 'searchfield'
	            }]
	        },
	        {
	            xtype: 'toolbar',
	            dock: 'top',
	            items: [{
	                xtype: 'selectfield',
	                name: 'options',
	                options: [
	                    {text: 'This is just a big select',  value: '1'},
	                    {text: 'Another select item', value: '2'}
	                ]
	            }]
	        }]
	    }]
	});


	var tabpan = new Ext.TabPanel({
	    fullscreen: true,
	    tabBar: {
	        dock: 'bottom',
	        layout: { pack: 'center'}
	    },
	    cardSwitchAnimation: {
	        type: 'slide'
	    },
	    items: [presentation,linux,logiciels,agenda,contact]
	});
	
	var tabpan = new Ext.TabPanel({
	    fullscreen: true,
	    tabBar: {
	        dock: 'bottom',
	        layout: { pack: 'center'}
	    },
	    cardSwitchAnimation: {
	        type: 'slide'
	    },
	    items: [
	        {
	            html: "<div class='presentation'>\
            <img id='logo' src='img/logo-agu3l.png' />\
				<p>Promotion et utilisation de Linux et des logiciels libres.</p>\
				<p>Découverte, utilisation, accompagnement. Installation sur votre machine.</p>\
				<p>Convivialité, créativité, partage.</p>\
				<p><a href='http://www.agu3l.org' alt='Site web AGU3L'>AGU3L en ligne</a>.</p>\
	                </div>"
	        },
	        linux,
	        logiciels,
	        agenda,
	        contact
	           ]
	});
	
	var header = new Ext.Toolbar({
	  dock: 'top',
	  ui: 'light',
	  title: 'Association AGU3L'
	});
	
	var tabpan = new Ext.TabPanel({
	    fullscreen: true,
	    tabBar: {
	        dock: 'bottom',
	        layout: { pack: 'center'}
	    },
	    cardSwitchAnimation: {
	        type: 'slide'
	    },
	    dockedItems: [header],
	    items: [presentation,linux,logiciels,agenda,contact]
	});

	}
});
  

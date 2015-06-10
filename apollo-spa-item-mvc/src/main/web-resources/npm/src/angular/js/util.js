/**
 * @license Inertia v1.0
 * 
 * Inertia, Inc. License: MIT
 */ 

    // unblock when ajax activity stops
    $(document).ajaxStop($.unblockUI); 
 
    function test() { 
        $.ajax({ url: 'wait.php', cache: false }); 
    } 

    $(document).ready(function() { 
    	
 
    $(document).ready(function() { 
        $('#saveAllItems').click(function() { 
            $.blockUI({ message: '<h1><img src="busy.gif" /> Just a moment...</h1>' }); 
        }); 
    });
    
    });
    
    String.prototype.replaceAll = function (find, replace) {
        var str = this;
        return str.replace(new RegExp(find, 'g'), replace);
    };

    var apollo = {
    		
    		generateFields : function(schema) {
    			var index=0;
    			var formFields = new Array();
    			
    			 $.each(schema, function(key, value) {
            		var formField = new Object();
            		formField.templateOptions = new Object();
            		
            		formField.key = key;
            		
            		if(key == '__v')
            			formField = null;
            		else if (key == '_id') {
        				formField.type = 'input';
        				formField.templateOptions.disabled = 'true';
            		}
            		else if(value.instance == 'String' && value.options.max > 500) {
        				formField.type = 'textarea';
        				formField.templateOptions.rows = 4;
        				formField.templateOptions.cols = 15;
            		} else if (value.instance == 'String'){
            			formField.type = 'input';
            		}else if (value.instance == 'Number'){
            			formField.type = 'input';
            		}
            		
            		if(formField != null) {
	            		formField.templateOptions.required = value.isRequired;
	            		formField.templateOptions.label = key.replaceAll("_", " ");     		
	            		formFields[index++] = formField;
            		}
            		
            	 });
    			 
    			 return formFields;
    		}
    		
    };
// Module declaration
var ngCryptModule = angular.module("ngCrypt", []);

/**
 * @ngdoc filter
 * @name hash
 * @kind function
 *
 * @description
 * Returns a hash of given text.
 * @requires CryptoJS libs for various algorithms
   You can find CryptoJS here : https://code.google.com/p/crypto-js/ 
 *
 * @param {string} text Text to be hashed.
 * @param {string} algorithm Hash algorithm to be used.
 * @returns {string} Hash of a given text if algorithm found otherwise "Unknown hash algorithm"
 *
 * @example
   <example>
     <file name="index.html">
       <script>
         function Ctrl($scope) {
           $scope.text = "This is test text";
         }
       </script>
       <div ng-controller="Ctrl">
         Enter Data: <input ng-model='val'><br>
         MD5 : <div>{{val | hash:"md5"}}</div><br>
         SHA1 : <div>{{val | hash:"sha1"}}</div><br>
         SHA2 : <div>{{val | hash:"sha2"}}</div><br>
         SHA3 : <div>{{val | hash:"sha3"}}</div><br>
       </div>
     </file>
   </example>
 */
ngCryptModule.filter("hash", function(){

	return function(text, algorithm){
             var hashValue = "Unknown hash algorithm";
	     if(typeof(algorithm)!=='undefined')
	     {
		algorithm = algorithm.toUpperCase().trim();
		// Call CryptoJS functions dynamically 
		try
                {
                    str_function_call = "CryptoJS." + algorithm + "('" + text + "').toString();";
                    hashValue = eval(str_function_call);
                }
                catch(err)
                {
		    hashValue = "Unknown hash algorithm" 
                    console.log(err); 
		}

	     } // End If
	     
	     return hashValue;
	} // End return function 
  } // End filter function
); // End filter 



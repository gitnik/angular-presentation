describe('CurrencyExchangeData', function() {

    beforeEach(
        inject(function(CurrencyExchangeData, $q) {
            var deferred = $q.defer();
            deffered.resolve('{"to": "EUR", "rate": 0.73236699999999999, "from": "USD"}');



        })
    );

   it('should exist', inject(function(CurrencyExchangeData) {
       expect(CurrencyExchangeData).toBeDefined();
   }));

   it('should have a getData() function', inject(function(CurrencyExchangeData){
       expect(CurrencyExchangeData.getAll()).toBeDefined();
   }));

   it('should return the json file')

});

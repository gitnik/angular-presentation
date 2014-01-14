describe('CurrencyConverterController', function() {
    beforeEach(
        inject(function(CurrencyExchangeData, $q) {
            var deferred = $q.defer();
            deferred.resolve('{"to": "EUR", "rate": 0.73236699999999999, "from": "USD"}');

            spyOn(CurrencyExchangeData, 'getData').and.returnValue(deferred.promise);
        })
    );

    it('should have the correct attributes',
        inject(function(CurrencyConverterController) {
            expect(CurrencyConverterController.getExchangeRate()).toBe('0.7323');
        })
    );
});

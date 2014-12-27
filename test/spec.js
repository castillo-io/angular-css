'use strict';

describe('door3.css', function () {

    var expect = chai.expect;

    beforeEach(module('door3.css'));

    it('should contain $css service', inject (function($css) {
        expect($css).not.to.equal(null);
    }));
    
});

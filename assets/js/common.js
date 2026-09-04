$(document).ready(function() {
    $('a.abstract').click(function(event) {
        event.preventDefault();

        var abstract = $(this).closest('.publication-entry').find('div.abstract.hidden').first();
        abstract.toggleClass('open');
        $(this).attr('aria-expanded', abstract.hasClass('open'));
    });
    $('a.bibtex').click(function(event) {
        event.preventDefault();

        var bibtex = $(this).closest('.publication-entry').find('div.bibtex.hidden').first();
        bibtex.toggleClass('open');
        $(this).attr('aria-expanded', bibtex.hasClass('open'));
    });
    $('a').removeClass('waves-effect waves-light');
});

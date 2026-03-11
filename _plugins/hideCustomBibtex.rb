 module Jekyll
  module HideCustomBibtex
    def hideCustomBibtex(input)
      return input if input.nil?
	  keywords = @context.registers[:site].config['filtered_bibtex_keywords']

	  keywords.each do |keyword|
		input = input.gsub(/^\s*#{Regexp.escape(keyword)}\s*=.*\n/, '')
	  end

      return input
    end
  end
end

Liquid::Template.register_filter(Jekyll::HideCustomBibtex)

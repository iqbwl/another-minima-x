# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "another-minima-x"
  spec.version       = "1.0.0"
  spec.authors       = ["Iqbwl"]
  spec.email         = ["iqbwl@abc.web.id"]

  spec.summary       = "Another Minima X - A clean, modern Jekyll theme"
  spec.description   = "Another Minima X is a minimalist Jekyll theme featuring a glassmorphism header, clean typography with Inter font, GitHub-style markdown rendering, and responsive design. Perfect for personal blogs and digital notebooks."
  spec.homepage      = "https://github.com/iqbwl/another-minima-x"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select do |f|
    f.match(%r{^(assets|_(includes|layouts|sass)/|(LICENSE|README)((\.(txt|md|markdown|html)|$)))}i)
  end

  spec.required_ruby_version = ">= 2.7.0"

  spec.add_runtime_dependency "jekyll", "~> 4.0"
  spec.add_runtime_dependency "jekyll-feed", "~> 0.12"
  spec.add_runtime_dependency "jekyll-seo-tag", "~> 2.6"
  spec.add_runtime_dependency "jekyll-sitemap", "~> 1.4"

  spec.add_development_dependency "bundler"
end

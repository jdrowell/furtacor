require 'rubygems'
require 'furtacor'

root_dir = File.dirname(__FILE__)

set :environment, ENV['RACK_ENV'].to_sym
set :root,        root_dir
disable :run

run Furtacor

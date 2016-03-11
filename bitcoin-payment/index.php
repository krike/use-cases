<?php
require_once "vendor/autoload.php";
$config = parse_ini_file("settings.ini");

use Coinbase\Wallet\Client;
use Coinbase\Wallet\Configuration;


$configuration = Configuration::apiKey($config['apikey'], $config['apisecret']);

//specify Demo sandbox url
$configuration->setApiUrl(Configuration::SANDBOX_API_URL);

$authentication = $configuration->getAuthentication();

$client = Client::create($configuration);

echo '<pre>';
var_dump($authentication);
var_dump($client->getPrimaryAccount());
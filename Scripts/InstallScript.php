<?php

include_once __DIR__.'/BaseInstallScript.php';
use Symfony\Component\Filesystem\Filesystem;

class InstallScript extends BaseInstallScript
{

    public function install()
    {

        $connection = $this->getConnection();
        /* create you database table 
        $connection->exec("DROP TABLE IF EXISTS `cash_orders_log`;");
        $connection->exec("
            CREATE TABLE IF NOT EXISTS `cash_orders_log` (
            `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
            PRIMARY KEY (`id`)
          ) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;
        ");*/
        $this->installTheme();
    }

    private function installTheme()
    {
        $rootDir = realpath($this->kernel->getParameter('kernel.root_dir') . '/../');

        $originDir = "{$rootDir}/plugins/Zero/theme";
        $targetDir = "{$rootDir}/web/themes/Zero";

        $filesystem = new Filesystem();
        if ($filesystem->exists($targetDir)) {
            $filesystem->remove($targetDir);
        }

        if ($this->installMode == 'command') {
            $filesystem->symlink($originDir, $targetDir, true);
        } else {
            $filesystem->mirror($originDir, $targetDir, null, array('override' => true, 'delete' => true));
        }
    }

}
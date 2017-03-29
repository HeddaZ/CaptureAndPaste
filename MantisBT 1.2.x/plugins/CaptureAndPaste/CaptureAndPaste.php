<?php
require_once(config_get('class_path') . 'MantisPlugin.class.php');

class CaptureAndPastePlugin extends MantisPlugin
{
    function register()
    {
        $this->name = "Capture And Paste";
        $this->description = "Image Capturer for Uploading. Capture screenshot and directly paste into the file uploder.";

        $this->version = '1.1';
        $this->requires = array(
            'MantisCore' => '1.2.0',
        );

        $this->author = 'Hedda';
        $this->url = 'https://github.com/heddaz';
    }

    function init()
    {
        plugin_event_hook('EVENT_REPORT_BUG_FORM', 'addIncludes');
        plugin_event_hook('EVENT_VIEW_BUG_DETAILS', 'addIncludes');
    }

    function addIncludes($p_event, $p_project_id)
    {
        echo '<link type="text/css" rel="stylesheet" href="plugins/CaptureAndPaste/pages/captureandpaste.css" />';
        echo '<script type="text/javascript" src="plugins/CaptureAndPaste/pages/paste.js"></script>';
        echo '<script type="text/javascript" src="plugins/CaptureAndPaste/pages/captureandpaste.js"></script>';
    }
}

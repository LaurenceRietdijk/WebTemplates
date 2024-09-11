<?php
$img_dir = "images/"; // Specify the directory where you want to save the file
$file = $img_dir . basename($_FILES['file_upload']["name"]); // Combine directory and file name

if (isset($_POST['submit'])) {
    // Check if the file already exists
    if (file_exists($file)) {
        echo "<h2>File already exists</h2>";
    } else {
        // Move the uploaded file to the destination directory
        if (move_uploaded_file($_FILES['file_upload']['tmp_name'], $file)) {
            echo "<h2>File successfully uploaded</h2>";
        } else {
            echo "<h2>There was an error uploading the file</h2>";
        }
    }
}

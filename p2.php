<?php
$servername = "localhost";
$username = "root";
$password = "";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
// Create database
$sql = "CREATE DATABASE EventsStorage";
if ($conn->query($sql) === TRUE) {
    echo "Database created successfully";
} else {
    echo "Error creating database: " . $conn->error;
}

$conn->close();

$conn = new mysqli($servername,$username ,$password ,"EventsStorage");
if ($conn->connect_error) 
{
    die($conn->connect_error);
}
// sql to create table
$sql = "CREATE TABLE tt (
type varchar(100),
val varchar(100)
)";
if ($conn->query($sql) === TRUE) {
    echo "Table tt created successfully";
} else {
    echo "Error creating table: " . $conn->error;
}
if(isset($_POST['data'])){
    $data =json_decode($_POST['data'],true);
    $conn = new mysqli($servername, $username, $password, "EventStorage");
        if($conn->connect_error){
           die($conn->connect_error);
        }
     foreach($data as $key => $value )
    {
       
        $sql = "Insert Into tt values('$key', '$value')";
        $conn->query($sql);
        if($conn->affected_rows > 0){}
        else
        {
          echo " Error In Insertion";	
        }
        
        
    }
	$conn->close();
    
    if(isset($_GET['data'])){
	$conn = new mysqli($servername,$username ,$password , "EventStorage");
        if($conn->connect_error){
           die($conn->connect_error);
        }
	$sql="select * from tt";
	if($result=$conn->query($sql)){
		$rows=array();
		if($result->num_rows>0){
			while($row=$result->fetch_assoc()){
			   array_push($rows,$row);}
		 echo json_encode($rows,true);
		}	
	}
	else { echo "NO data to retrive";}
}
?>
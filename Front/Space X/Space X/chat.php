<?php

/**
 */

// Nome do arquivo de buffer de mensagem. Você tem que criá-lo manualmente com permissões de leitura e gravação para o servidor da web.
$messages_buffer_file = 'messages.json';
// Número de mensagens mais recentes mantidas no buffer
$messages_buffer_size = 10;

if ( isset($_POST['content']) and isset($_POST['name']) )
{
    // Abra, bloqueie e leia o arquivo de buffer de mensagem
    $buffer = fopen($messages_buffer_file, 'r+b');
    flock($buffer, LOCK_EX);
    $buffer_data = stream_get_contents($buffer);
    
    // Acrescente uma nova mensagem aos dados do buffer ou comece com um id de mensagem de 0 se o buffer estiver vazio
    $messages = $buffer_data ? json_decode($buffer_data, true) : array();
    $next_id = (count($messages) > 0) ? $messages[count($messages) - 1]['id'] + 1 : 0;
    $messages[] = array('id' => $next_id, 'time' => time(), 'name' => $_POST['name'], 'content' => $_POST['content']);
    
    // Remova as mensagens antigas se necessário para manter o tamanho do buffer
    if (count($messages) > $messages_buffer_size)
        $messages = array_slice($messages, count($messages) - $messages_buffer_size);
    
    // Reescrever e desbloqueie o arquivo de mensagem
    ftruncate($buffer, 0);
    rewind($buffer);
    fwrite($buffer, json_encode($messages));
    flock($buffer, LOCK_UN);
    fclose($buffer);
    
    // Opcional:Anexar mensagem ao arquivo de log (anexos de arquivo são atômicos)(ainda em teste)
    //file_put_contents('chatlog.txt', strftime('%F %T') . "\t" . strtr($_POST['name'], "\t", ' ') . "\t" . strtr($_POST['content'], "\t", ' ') . "\n", FILE_APPEND);
    
    exit();
}
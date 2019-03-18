curl --request POST \
  --url http://localhost:8080/clients/upload-csv \
  --header 'cache-control: no-cache' \
  --header 'content-type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' \
  --header 'postman-token: ff7577e4-1959-2217-b940-07d6dd03bb13' \
  --form file=@test.csv
file_count=$(ls -l | grep ^- | wc -l)
dir_count=$(ls -l | grep ^d | wc -l)

total=$((file_count + dir_count))
echo $total

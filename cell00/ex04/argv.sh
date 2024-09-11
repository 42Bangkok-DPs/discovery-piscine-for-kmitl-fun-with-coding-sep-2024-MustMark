count=0
for i in $@
do
	echo "$i"
	if ((count == 2));		then
		break
	else
		count=$((count + 1))
	fi
done

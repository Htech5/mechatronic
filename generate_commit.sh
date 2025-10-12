#!/bin/bash

# Mengambil daftar semua file yang belum di-commit
FILES=($(git ls-files -m -o --exclude-standard))

if [ ${#FILES[@]} -eq 0 ]; then
  echo "Tidak ada file yang ditemukan."
  exit 1
fi

echo "Ditemukan ${#FILES[@]} file asli. Memulai sebaran commit untuk Oktober 2025..."

for FILE in "${FILES[@]}"; do
  # Rentang hari 1 sampai 31 (Oktober)
  DAY=$(( ( RANDOM % 31 ) + 1 ))
  FORMATTED_DAY=$(printf "%02d" $DAY)
  
  HOUR=$(printf "%02d" $(( RANDOM % 24 )))
  MINUTE=$(printf "%02d" $(( RANDOM % 60 )))
  SECOND=$(printf "%02d" $(( RANDOM % 60 )))
  
  # Bulan 10 (Oktober) tahun 2025
  DATE_STR="2025-10-${FORMATTED_DAY}T${HOUR}:${MINUTE}:${SECOND}"
  
  git add "$FILE"
  GIT_AUTHOR_DATE="$DATE_STR" GIT_COMMITTER_DATE="$DATE_STR" git commit -m "Add/Update $FILE"
  
  echo "Berhasil commit '$FILE' pada: $DATE_STR"
done

echo "Selesai! Semua file berhasil di-commit di bulan Oktober 2025."
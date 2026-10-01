type Photo={id:string,label?:string};
export function verifyCheckout(photos:Photo[],checked:unknown,complete:boolean):string[]{
  if(!Array.isArray(checked)||checked.some(id=>typeof id!=='string'))throw Error('Danh sách ảnh đối chiếu không hợp lệ.');
  const available=new Set(photos.map(p=>p.id));
  if(checked.some(id=>!available.has(id)))throw Error('Ảnh đối chiếu không thuộc check-in của đơn này. Hãy tải lại đơn.');
  const ids=[...new Set(checked as string[])];
  if(complete){
    if(!photos.length)throw Error('Đơn chưa có ảnh check-in để đối chiếu. Chưa thể hoàn tất check-out.');
    const missing=photos.filter(p=>!ids.includes(p.id));
    if(missing.length)throw Error(`Còn ${missing.length} ảnh chưa xác nhận đủ đồ: ${missing.map(p=>p.label||'Ảnh '+(photos.indexOf(p)+1)).join('; ')}.`);
  }
  return ids;
}

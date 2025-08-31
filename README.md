ini project to do list sederhana berbasis checkbox part ke-4
ini lanjutan dari part ke-3, tapi dipastikan lebih bagus lagi!

pada project part ke-3, banyak kekurangannya terutama dalam sistem undo redo-nya, di project part ke-4 hal yang diperbaiki adalah:
- sistem undo redo
- UI
- kode yang diusahakan agar bersih dan reusable

(fitur masih tetap sama, ini hanya project perbaikan)

<li class="todo p-2 md:p-4 lg:p-6 pt-2 lg:pt-2 bg-gray-300 rounded-sm shadow-md shadow-bg-gray-300">
				<div class="head-todo flex items-center justify-between mb-2">
					<time class="text-md lg:text-lg" datetime="">31 agustus 2025</time>
					<span class="delete-buton w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] flex items-center justify-center hover:cursor-pointer active:scale-[0.9]">
						<i class="material-symbols-outlined size">delete</i>
					</span>
				</div>
				<div class="body-todo py-1 flex items-center flex-col lg:flex-row gap-1">
					<div class="todo-activity-wrapper py-1 w-full lg:grow relative">
						<textarea class="todo-input resize-none block w-full md:text-lg lg:text-[1.5rem] font-semibold" disabled>Hello world!</textarea>
					</div>
					<div class="todo-checkbox-wrapper w-full lg:w-fit py-1 flex gap-3 justify-center">
						<div class="input-checkbox-wrapper w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px] relative">
							<input class="block w-full h-full" type="checkbox" />
						</div>
						<div class="input-checkbox-wrapper w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px] relative">
							<input class="block w-full h-full" type="checkbox" />
						</div>
						<div class="input-checkbox-wrapper w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px] relative">
							<input class="block w-full h-full" type="checkbox" />
						</div>
						<div class="input-checkbox-wrapper w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px] relative">
							<input class="block w-full h-full" type="checkbox" />
						</div>
						<div class="input-checkbox-wrapper w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px] relative">
							<input class="block w-full h-full" type="checkbox" />
						</div>
						<div class="input-checkbox-wrapper w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px] relative">
							<input class="block w-full h-full" type="checkbox" />
						</div>
						<div class="input-checkbox-wrapper w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px] relative">
							<input class="block w-full h-full" type="checkbox" />
						</div>
					</div>
				</div>
			 </li>
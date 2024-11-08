"use client";

import { useState, useEffect } from "react";
import FilterCategory from "@/app/[locale]/_components/analyze/FilterCategory";
import FilterAnalyzeItems from "./FilterAnalyzeItems";
import { Select, Spin } from 'antd'; // Spin для индикатора загрузки
import { DownOutlined } from '@ant-design/icons';
import axios from "axios";

export default function Filter({ params }) {
  const { locale } = params;
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [tests, setTests] = useState([]);
  const [filteredTests, setFilteredTests] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(true); // Состояние загрузки категорий
  const [loadingTests, setLoadingTests] = useState(false); // Состояние загрузки тестов
  const [isSelectOpen, setIsSelectOpen] = useState(false); // Состояние для отслеживания открытия Select

  useEffect(() => {
    const fetchDataOfApi = async () => {
      try {
        setLoadingTests(true);
        const response = await axios.post('/api/proxy', {
          userName: 'INTERMED',
          password: 'IN12TER34MED56',
          language: 1
        });

        const testsData = response.data.data; // Доступ к массиву данных через поле data
        setTests(testsData);

        // Извлекаем уникальные категории из полученных данных
        const uniqueCategories = [...new Set(testsData.map(test => test.testSectionName))];
        setCategories(uniqueCategories);

        // Устанавливаем первую категорию как активную и фильтруем анализы
        if (uniqueCategories.length > 0) {
          setActiveCategory(uniqueCategories[0]);
          setFilteredTests(testsData.filter(test => test.testSectionName === uniqueCategories[0]));
        }

        setLoadingCategories(false);
        setLoadingTests(false);
      } catch (error) {
        console.error('Ошибка при получении данных анализов:', error);
        setLoadingCategories(false);
        setLoadingTests(false);
      }
    };

    fetchDataOfApi();
  }, []);

  // Функция переключения категории
  const handleFilter = (category) => {
    setActiveCategory(category);
    setFilteredTests(tests.filter(test => test.testSectionName === category));
  };

  // Обработка открытия/закрытия выпадающего меню
  const handleDropdownVisibleChange = (open) => {
    setIsSelectOpen(open);
    if (open) {
      document.body.style.overflow = 'hidden'; // Блокируем прокрутку страницы
    } else {
      document.body.style.overflow = ''; // Возвращаем прокрутку страницы
    }
  };

  // Для мобильной версии формируем массив категорий для селекта
  const mobileCategoryOptions = categories.map(category => ({
    value: category,
    label: category
  }));

  return (
    <div className="w-full h-auto bg-white max-mdl:px-4">
      <div className="w-full max-w-[1440px] mx-auto h-auto flex max-mdl:flex-col gap-10">
        
        {/* Desktop version of categories */}
        <div className="w-full mdl:max-w-1/3 mdl:w-1/3 flex flex-col gap-3 h-auto max-mdl:hidden">
          {loadingCategories ? (
            <Spin size="large" /> // Индикатор загрузки
          ) : (
            categories.map((category) => (
              <FilterCategory
                key={category}
                title={category}
                catname={category}
                handleFilter={handleFilter}
                active={activeCategory}
              />
            ))
          )}
        </div>

        {/* Mobile version of category filter */}
        <div className="mdl:hidden w-full mb-4">
          {loadingCategories ? (
            <Spin size="large" /> // Индикатор загрузки для мобильной версии
          ) : (
            <Select
              defaultValue={activeCategory}
              className='custom-select'
              options={mobileCategoryOptions}
              onChange={value => handleFilter(value)}
              onDropdownVisibleChange={handleDropdownVisibleChange} // Отслеживаем изменение видимости выпадающего списка
              suffixIcon={<DownOutlined style={{ color: 'white' }} />} // Белая стрелка
              style={{
                backgroundColor: '#FB6A68', // Красный фон
                color: 'white', // Белый текст
                borderRadius: '50px', // Закругленные края
                height: '48px', // Высота кнопки
                fontSize: '18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              dropdownStyle={{
                backgroundColor: '#fff', // Белый фон для выпадающего списка
                borderRadius: '10px', // Закругление краев выпадающего списка
              }}
              popupClassName="custom-select-dropdown" // Класс для стилизации выпадающего списка
            />
          )}
        </div>

        {/* List of filtered tests */}
        <div className="w-full mdl:max-w-2/3 mdl:w-2/3 flex flex-col gap-3 h-auto">
          {loadingTests ? (
            <Spin size="large" /> // Индикатор загрузки тестов
          ) : (
            filteredTests.map((test) => (
              <FilterAnalyzeItems
                key={test.id}
                title={test.testName}
                shortDescription={test.shortDescription || "Описание отсутствует"}
                price={test.fee}
                slug={test.testId} // Используем testId для формирования ссылки
                locale={locale}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
